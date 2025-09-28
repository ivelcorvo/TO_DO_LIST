const Footer = () => {
  return (
    <footer className=" px-3 pt-5 flex flex-col justify-center items-center">
      <div className="mx-auto md:mx-0 mt-5 md:mt-0 flex" >
        <a href="https://www.linkedin.com/in/levi-alves-junior-09b91a189/" target="_blank" rel="noreferrer" className="m-2">
          <i className="text-gray-600 fa-brands fa-linkedin fa-2x hover:scale-150"></i>
        </a>
        <a href="https://github.com/ivelcorvo" target="_blank" rel="noreferrer" className="m-2">
          <i className="text-gray-600 fa-brands fa-square-github fa-2x hover:scale-150"></i>
        </a>
      </div>
      <p className="text-gray-600">&copy; 2025 Levi Alves Junior - Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer