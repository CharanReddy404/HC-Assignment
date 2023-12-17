import Image from 'next/image';

export default async function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-black'>
      <div className='text-center text-white'>
        <h1 className='text-3xl m-4'>Welcome to Home Page</h1>
        <p>The Assignment as been completed</p>
        <Image
          src={'https://media1.giphy.com/media/icPn4EwqNpAsZQmInZ/giphy.gif'}
          alt='Task Completed'
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
