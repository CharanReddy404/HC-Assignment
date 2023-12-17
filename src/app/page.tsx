import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-black'>
      <div className='text-center text-white'>
        <h1 className='text-3xl m-4'>Welcome Hitesh Choudhary</h1>
        <p>The Assignment as been completed</p>
        <div className='mt-4 md:mt-2 mb-8'>
          <ul className='list-none flex justify-center'>
            <li className='m-6'>
              <Link
                href='/home'
                className='bg-green-600 text-white px-4 py-2 rounded'
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
