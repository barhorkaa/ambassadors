export default function NavBar() {
  return(
    <nav className="relative select-none bg-amber-200 lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch h-12">
        <a href="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark">Home</a>
      </div>
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <a href="/login" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark">Login</a>
          <a href="/register" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark">Register</a>
        </div>
      </div>
    </nav>
  );
}