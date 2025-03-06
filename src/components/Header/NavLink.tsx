
type props = {
  title: string;
 
};

const NavLink = ({ title }: props) => {
  return (
    <div
      
      className=" w-full p-1 pb-0 flex justify-end items-center text-[16px] text-background hover:text-secondary duration-300 ease-in-out font-grandstander-medium_500 leading-normal  whitespace-nowrap capitalize"
    >
      {title}
    </div>
  );
};

export default NavLink;
