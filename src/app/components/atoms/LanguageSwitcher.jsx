'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import MainButton from './MainButton'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState(() => pathname.split('/')[1] || 'en')

  useEffect(() => {
    document.documentElement.setAttribute('dir', currentLocale === 'ar' ? 'rtl' : 'ltr')
  }, [currentLocale])

  const changeLanguage = (locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`
    router.push(`/${locale}${pathname.substring(currentLocale.length + 1)}`)
  }

  return (
    <div className="flex gap-2">
      <MainButton currentLocale={currentLocale} title="العربية"  buttonLocale="ar" onClick={() => changeLanguage('ar')} />
      <MainButton currentLocale={currentLocale} title="English" buttonLocale="en" onClick={() => changeLanguage('en')} />
    </div>
  )
}
