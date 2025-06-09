import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP Error:', error);

      // Optionally show toast or redirect based on status
      if (error.status === 401) {
        // Redirect to login or show message
      }

      return throwError(() => error);
    })
  );
};
