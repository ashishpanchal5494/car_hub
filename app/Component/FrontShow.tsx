import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';


interface FrontShowProps  {
    showImage: boolean;
    setShowImage: boolean;
}

function FrontShow({showImage, setShowImage}: FrontShowProps) {
  return (
    <div>
      <Transition appear show={showImage} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => setShowImage(false)}>
        <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center
          justify-center p-4 text-center'>
            <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo='opacity-0 scale-95'
        >
          <Dialog.Panel className="relative w-full max-w-lg
          max-h-[90vh] overflow-y-auto
          transform rounded-2xl bg-white p-6 text-left
          shadow-xsl transition-all flex flex-col
          gap-5">
          
                <Image src="/hero.png" alt='hero'
                fill className='object-contain' />
                

           
          </Dialog.Panel>
        </Transition.Child>
          </div>
        </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default FrontShow
