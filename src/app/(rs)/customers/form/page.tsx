import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

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
      console.log(customer);
      //Put customer form component
    } else {
      //new customer form component
    }
  } catch (error) {
    if (error instanceof Error) throw error;
  }
}
