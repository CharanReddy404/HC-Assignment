import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { userId }: { userId: string | null } = auth();
  return (
    <header className='text-white'>
      <nav className='container mx-auto px-6 py-3'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold text-yellow-300'>
              <Link href='#'>Hitesh Choudhary</Link>
            </div>
          </div>
          <div className='mt-4 md:mt-0'>
            <ul className='list-none flex'>
              {userId ? (
                <li className='ml-6'>
                  <UserButton afterSignOutUrl='/' />
                </li>
              ) : (
                <li className='ml-6'>
                  <Link
                    href='/home'
                    className='bg-blue-700 text-white px-4 py-2 rounded'
                  >
                    Log in
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
