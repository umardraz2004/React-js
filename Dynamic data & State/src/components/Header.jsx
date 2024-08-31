import reactImage from '../assets/react.svg'
const Header = () => {
    const a = 10;
  return (
    <div className="flex flex-col items-center my-10">
      <div className='pb-5'>
      <img className='w-32' src={reactImage} alt="" />
      </div>
      <div className='text-5xl pb-5 font-semibold text-purple-500'>React Essentials</div>
      <div className='text-2xl font-semibold text-cyan-400'>Fundamental react concepts you will need for almost any app you are going to build!</div>
    </div>
  )
}

export default Header