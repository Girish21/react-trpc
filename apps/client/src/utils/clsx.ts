export function clsx(...args: string[]) {
  return args.filter(Boolean).join(' ')
}
