import { ThemeButton } from "./ThemeButton"

const Header = () => {
  return (
    <header className='fixed top-0 right-0 left-0 p-2 flex justify-center items-center'>
        <div className="flex gap-4">
        <ThemeButton/>
        </div>
    </header>
  )
}

export default Header