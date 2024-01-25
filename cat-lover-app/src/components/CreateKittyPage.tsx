import { Link } from "react-router-dom";
import CreateKitty from "./CreateKitty";

// Define the type for the 'onCreate' function
type OnCreateFunction = (data: any) => void; // Adjust 'any' to the actual type of created kitty data

interface CreateKittyPageProps {
  onCreate: OnCreateFunction;
}

const CreateKittyPage: React.FC<CreateKittyPageProps> = ({ onCreate }) => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/kitties" className="mt-4 text-blue-500 hover:underline">
        Back to Kitties
      </Link>
      <CreateKitty onCreate={onCreate} />
    </div>
  );
};

export default CreateKittyPage;
