import React from 'react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { redirect } from 'next/navigation';

const page = async () => {

  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    redirect('/auth-callback?origin={dashboard}')
  }

  return (
    <div>
      {user?.email || "No email found"}
      <br />
      {user?.id || "No id Found"}
    </div>
  )
}

export default page;