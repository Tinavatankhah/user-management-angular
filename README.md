
# پروژه مدیریت کاربران


## 1.انتخاب نقش

در صفحه اصلی برای نشان دادن استفاده از authGuard دو نقش ادمین و کاربر عادی وجود دارد.
هردو کاربر با query parameters توسط authGuard چک میشوند

ادمین به صفحه بعدی میرود در حالی که
کاربر عادی اجازه رفتن به صفحه بعد را ندارد.
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/c82537bc-3ab8-4da9-935b-5b5f6bf014c0" />

## 2.ساختار Layout 

هدر و فوتر برای تمامی صفحات، مشترک است ,
صفحه users  علاوه بر هدر و فوتر مشترک layout خاص دارد
 فرزندان users صفحات add و edit از این layout خاص علاوه بر مشترک بهره مند هستند.

<img width="1916" height="960" alt="image" src="https://github.com/user-attachments/assets/45d6d3b6-a40a-4879-8f3a-3a02053854fb" />


## عملیات مدیریت کاربران


Add: 

اضافه کردن کاربر جدید

Edit: 

ویرایش اطلاعات کاربر

Show: 

مخفی کردن کاربر

Show hidden: 

نشان دادن کاربران مخفی

Delete:

 حذف کاربر

<img width="1917" height="963" alt="image" src="https://github.com/user-attachments/assets/9827d9b6-f5fb-4012-96ee-c4b3b9c1bbcf" />


## 4.جستجو و فیلتر کردن
جستجوی کاربران بر اساس نام و نام خانوادگی

جستجوی کاربران بر اساس ایمیل

فیلتر کردن کاربران براساس نقش
<img width="1915" height="961" alt="image" src="https://github.com/user-attachments/assets/c07fdba0-c18c-48b4-bc86-e65a6f224ead" />


