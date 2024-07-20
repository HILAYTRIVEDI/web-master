import PatientForm from '@/components/forms/PatientForm';
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      { /* Todo opt verification */ }
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] flex flex-col">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Careplus Logo"
            width={1000}
            height={1000}
            className='mb-12 h-10 w-fit'
          />
          <div className="form mt-32">
            <PatientForm />
          </div>
          <div className="copyright text-14-regular mt-20 flex justify-between items-center">
            <p className='justify-items-end text-dark-600 xl:text-left'>
              @carepulse copyright
            </p>
            <Link className='text-green-500' href='/?admin=true'>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src='/assets/images/onboarding-img.png'
        alt='Onboarding Background'
        width={1000}
        height={1080}
        className='side-img max-w-[50%]'
      />
    </div>
  )}