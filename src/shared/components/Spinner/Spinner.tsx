import { ClipLoader } from 'react-spinners'

type SpinnerProps = {
  loading?: boolean
  size?: number
  color?: string
}

function Spinner({
  loading = true,
  size = 40,
  color = '#0d6efd',
}: SpinnerProps) {
  return (
    <div className="flex flex-center pt-30 pb-30" role="status">
      <ClipLoader loading={loading} size={size} color={color} />
    </div>
  )
}

export default Spinner
