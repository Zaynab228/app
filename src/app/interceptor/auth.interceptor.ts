import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
// HttpInterceptorFnبعترض كل الريكويستات اللي طالع وانفذ عليهم ال
//token بتاع الريكويس وضيف عليه ال header الفنكشن دي كل وظيفتها انها تاخد ال 
//ريكويست نفسه غير قابل للتعديل 
///واعدل عليهاcloneباخد نسخه عن طريق ال 
// server or another interseptor ابعتها لل ستي اللي بعد كدا سواء كانت ال 
  const token = localStorage.getItem('tokenApp');
  if(token!=null){
   let clonedRequest=req.clone({
    headers:req.headers.set('token',token)

   })
    return next(clonedRequest)
}
 
return next(req);};
