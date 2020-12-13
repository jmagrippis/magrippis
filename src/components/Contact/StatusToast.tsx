import cn from 'classnames'

export enum Status {
  Idle = 'idle',
  Processing = 'processing',
  Success = 'success',
  Error = 'error',
}

type Props = {
  status: Status
}

const statusToCopy = {
  [Status.Processing]: 'sending your message...',
  [Status.Success]: 'Johnny got your message, cheers!',
  [Status.Error]: 'something went wrong, could you try again?',
}

export const StatusToast = ({ status }: Props) =>
  statusToCopy[status] ? (
    <div
      className={cn(
        'text-base flex-grow self-stretch flex items-center justify-center shadow-sm rounded px-4 py-2 mr-4 border',
        {
          'text-purple-700 bg-purple-50 border-purple':
            status === Status.Processing,
        },
        {
          'text-green-100 bg-green-400 border-green': status === Status.Success,
        },
        {
          'text-red-700 bg-red-50 border-red': status === Status.Error,
        }
      )}
    >
      {statusToCopy[status]}
    </div>
  ) : (
    <span className="flex-grow" />
  )
