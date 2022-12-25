export const daterange = (startDate: Date, endDate: Date): string => {
    const tmpEndDate = endDate ? endDate : new Date()
    const start = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(startDate)

    const end = endDate
      ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(endDate)
      : 'Present'


    const timeDiff = (tmpEndDate.getTime() - startDate.getTime()) / 1000
    const timeDiffInYears = Math.round((timeDiff / 60 / 60 / 24 / 365) * 10) / 10
    const years = Math.floor(timeDiffInYears)
    const months = Math.ceil((Math.round((timeDiffInYears % 1) * 10) / 10) * 12)

    return `<time datetime="P${
      years > 0 ? `${years}Y` : ''
    }${
      months > 0 ? `${months}M` : ''
    }">${start} to ${end}</time>`

}
