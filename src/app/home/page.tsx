import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12 md:p-24 bg-black'>
      <div className='text-center text-white'>
        <div className='mb-8'>
          <h1 className='text-3xl m-4'>Welcome to Home Page</h1>
          <p>The Assignment as been completed</p>
          <Image
            src={'https://media1.giphy.com/media/icPn4EwqNpAsZQmInZ/giphy.gif'}
            alt='Task Completed'
            width={500}
            height={500}
          />
        </div>
        <div className='mt-4 md:mt-2 mb-8'>
          <ul className='list-none flex flex-col md:flex-row justify-center'>
            <li className='m-6'>
              <Link
                href='https://youtu.be/o5QE8YYQDaA'
                target='_blank'
                className='bg-red-700 text-white px-4 py-2 rounded'
              >
                While Loop Video
              </Link>
            </li>
            <li className='m-6'>
              <Link
                href='https://youtu.be/WUxCBfm2KAE'
                target='_blank'
                className='bg-red-700 text-white px-4 py-2 rounded'
              >
                For Loop Video
              </Link>
            </li>
          </ul>
        </div>
        <div className='mt-4 md:mt-2'>
          <ul className='list-none flex flex-col md:flex-row justify-center'>
            <li className='p-6'>
              <Link
                href='https://github.com/CharanReddy404/HC-Assignment/blob/main/src/assets/mdFiles/WHILELOOP.md'
                target='_blank'
                className='bg-blue-700 text-white px-4 py-2 rounded'
              >
                While Loop Notes
              </Link>
            </li>
            <li className='p-6'>
              <Link
                href='https://github.com/CharanReddy404/HC-Assignment/blob/main/src/assets/mdFiles/FORLOOP.md'
                target='_blank'
                className='bg-blue-700 text-white px-4 py-2 rounded'
              >
                For Loop Notes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
