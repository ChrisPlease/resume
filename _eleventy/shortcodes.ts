import { formatDate } from '../utils/dates'

export const daterange = (className: string, startDate: Date, endDate: Date): string => {
  const start = formatDate(startDate, { month: 'short', year: 'numeric' })
  const end = formatDate(endDate, { month: 'short', year: 'numeric' })

  const timeDiff = (endDate.getTime() - startDate.getTime()) / 1000
  const timeDiffInDays = Math.round(timeDiff / 60 / 60 / 24)
  const timeDiffInYears = Math.round((timeDiffInDays / 365) * 10) / 10
  const years = Math.floor(timeDiffInYears)
  const months = Math.ceil((Math.round((timeDiffInYears % 1) * 10) / 10) * 12)

  return `<time class="${className}" datetime="P${
      years > 0 ? `${years}Y` : ''
    }${
      months > 0 ? `${months}M` : ''
    }">${start} to ${end}</time>`
}
