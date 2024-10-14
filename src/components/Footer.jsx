import moviedb_logo from "../assets/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg";

function Footer() {
  return (
    <div className="h-fit flex items-center justify-center bottom-0 p-6 w-full text-white bg-darkerpurple font-thin border-solid border-x-0 border-b-0 border-t-darkpurple border-t-[1px]">
      <div className="flex flex-col items-center">
        <p className="opacity-20 tracking-wide text-md font-extralight ">
          Powered by
        </p>
        <img
          src={moviedb_logo}
          alt="The Movie Database logo"
          className="h-4 w-auto"
        />
        <p className="opacity-20 text-sm font-extralight tracking-wide mt-4">
          Copyright 2024 All rights reservered
        </p>
      </div>
    </div>
  );
}

export default Footer;
