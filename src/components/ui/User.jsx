import ImageUser from "../../assets/illustration-user.svg";

export default function User() {
  return (
    <button className="flex items-center justify-end gap-8">
      <h1 className="text-lg font-medium text-secondary">Username</h1>
      <img className="h-10" src={ImageUser} alt="" />
    </button>
  );
}
