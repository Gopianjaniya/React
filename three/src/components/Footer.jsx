
function Footer() {
  return (
    <footer class=" relative  bg-gray-900 px-4 pt-20 w-full">
      <div class="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
        <img
          className="h-full object-contain rounded-2xl"
          src="https://media.istockphoto.com/id/1297361056/vector/c-logo-set.jpg?s=612x612&w=0&k=20&c=kDgNBtw34zNYJAwLKql9YEYWR2PbgV7O2kpwgb4cEfk="
          alt=""
        />
      </div>
      <nav
        aria-label="Footer Navigation"
        class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        <a href="#" class="font-medium text-white">
          Demo
        </a>
        <a href="#" class="font-medium text-white">
          Support
        </a>
        <a href="#" class="font-medium text-white">
          Privacy Policy
        </a>
        <a href="#" class="font-medium text-white">
          Terms & Conditions
        </a>
      </nav>
      <p class="py-10 text-center text-gray-300">
        © 2022 Boleno | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer