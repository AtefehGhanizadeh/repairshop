import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    if (!customerId && !ticketId) {
      return (
        <>
          <h1>TicketId or CustomerId required to load ticket form</h1>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h1>Customer ID #{customerId} not found.</h1>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      if (!customer.active) {
        return (
          <>
            <h1>Customer ID #{customerId} is not active.</h1>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(customer);

      //return ticket form
    }

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <>
            <h1>Ticket ID #{ticketId} not found.</h1>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      if (customerId) {
        const customer = await getCustomer(parseInt(customerId));
      }

      console.log(ticket)
      // ticket edit form
    }
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}
