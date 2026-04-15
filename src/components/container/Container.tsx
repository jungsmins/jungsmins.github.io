import { container } from './styles.css';

export function Container({ children }: { children: React.ReactNode }) {
  return <main className={container}>{children}</main>;
}
