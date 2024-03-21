import { IoMdMailUnread } from 'react-icons/io';
import Button from '@/components/Button';

const Newsletter = () => {
  return (
    <form
      action={'/thank-you'}
      className={'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'}
    >
      <h2 className={'flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'}>
        <IoMdMailUnread className={'text-xl'} />
        <span className={'ml-3'}>Stay up to date</span>
      </h2>

      <p className={'mt-2 text-sm text-zinc-600 dark:text-zinc-400'}>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <div>
        <input type='text' />

        <Button>Join</Button>
      </div>
    </form>
  );
};

export default Newsletter;
