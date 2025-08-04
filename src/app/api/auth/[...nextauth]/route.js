import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";


// Initialize NextAuth handler
const handler = NextAuth(authOptions);

// Export for Next.js App Router
export { handler as GET, handler as POST };
