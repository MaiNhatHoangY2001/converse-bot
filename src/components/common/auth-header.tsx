const AuthHeader = ({title, subTitle}: {title: string; subTitle: string}) => {
  return (
    <hgroup className="text-text-color flex flex-col gap-2">
      <h1 className="capitalize text-4xl font-semibold">{title}</h1>
      <p>{subTitle}</p>
    </hgroup>
  );
};

export default AuthHeader;
