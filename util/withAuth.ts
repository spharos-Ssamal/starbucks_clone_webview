import { userIsLogin } from '@/state/user/atom/userIsLoginState';
import { useRouter } from 'next/router';
import React from 'react'
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';

const withAuth = (props:{WrappedComponent:any}) => {

  return (props.WrappedComponent) => {
    if(typeof window === 'undefined') {

      const isLogin = useRecoilValue(userIsLogin);
      const router = useRouter();

      if(!isLogin) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You must login first!',
        })
        router.push('/login');
        return null;
      }

      return <WrappedComponent:any {...props} />

    }

    return null;   

  }


}

export default withAuth;