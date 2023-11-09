import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import React, { useState, useEffect  } from "react";
import { collection, doc, orderBy, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages"),
  );
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () =>{
    await deleteDoc(doc(db, "users", session?.user?.email!,"chats", id));
    router.replace("/");
  }


  return (
    <Link href={`/chat/${id}`} className={`chatRow justtify-center ${active && "bg-gray-700/50"}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">{messages?.docs[messages?.docs.length-1]?.data().text || "New Chat"}</p>
      <TrashIcon onClick={removeChat} className="h-5 w-5 text-gray hover:text-red-700" />
    </Link>
  );
}

export default ChatRow;
