import Button from './button';

const ViewMore = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-extrabold lg:text-2xl text-center pb-6">
        Want to view more videos?
      </h1>
      <div className="self-center">
        <Button text="CLICK HERE" />
      </div>
    </div>
  );
};

export default ViewMore;
