// lib/fonts.ts
import { Poppins, Playfair_Display } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include multiple weights
  variable: '--font-poppins',
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include multiple weights
  variable: '--font-playfair',
})