import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Secure',
    description:
      'Your data is encrypted and stored on your device. We do not have access to your data.',
    icon: LockClosedIcon,
  },
  {
    name: 'Fast',
    description:
      'We use the latest technology to make your experience as fast as possible.',
    icon: ServerIcon,
  },
  {
    name: 'Free',
    description:
      'We do not charge you for using our service. It is completely free.',
    icon: CloudArrowUpIcon,
  },
]

export default function Detail() {
  return (
    <div className="bg-white-900">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h5>Other Details</h5>
      </div>
    </div>
  )
}

