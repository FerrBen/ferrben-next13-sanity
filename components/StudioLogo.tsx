import Image from "next/image";

function StudioLogo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="https://pbs.twimg.com/profile_images/1336890675321823232/wxRiMYXp_400x400.jpg"
        alt="Ferrben Logo"
        width={50}
        height={50}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;
