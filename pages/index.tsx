import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Index() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <h1>test</h1>
  )
}