"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useState } from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);

  // 🔥 refresh session after update
  const refreshUser = async () => {
    await userData.refetch(); // if supported by your auth client
  };

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5 p-5">

        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold mt-2">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>

        {/* 🔥 pass refresh function */}
        <UpdateUserModal onSuccess={refreshUser} />
      </Card>
    </div>
  );
};

export default ProfilePage;