
const Nav = () => {
  return (
    <div>
       <nav className="bg-transparent">
        <header class="text-gray-600 body-font p-4 bg-transparent ">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">TaskMS</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">Home</a>
              <a class="mr-5 hover:text-gray-900">About</a>
              <a class="mr-5 hover:text-gray-900">Contact</a>
              <a class="mr-5 hover:text-gray-900">Help</a>
            </nav>

          </div>
        </header>
      </nav>
    </div>
  )
}

export default Nav
