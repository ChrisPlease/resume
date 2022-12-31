export const formatDate = (date: Date, opts?: Intl.DateTimeFormatOptions): string => {
  return new Intl.DateTimeFormat('en-US', { ...opts, timeZone: 'UTC' }).format(date)
}
