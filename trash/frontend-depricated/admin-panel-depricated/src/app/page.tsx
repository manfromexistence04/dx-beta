// import Link from "next/link"
// import { CircleUser, Menu, Package2, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"















import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
// export function Dashboard() {
//   return (
//     <div className="flex min-h-screen w-full flex-col">
//       <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
//         <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
//           <Link
//             href="#"
//             className="flex items-center gap-2 text-lg font-semibold md:text-base"
//           >
//             <Package2 className="h-6 w-6" />
//             <span className="sr-only">Acme Inc</span>
//           </Link>
//           <Link
//             href="#"
//             className="text-foreground transition-colors hover:text-foreground"
//           >
//             Dashboard
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Orders
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Products
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Customers
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Analytics
//           </Link>
//         </nav>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button
//               variant="outline"
//               size="icon"
//               className="shrink-0 md:hidden"
//             >
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left">
//             <nav className="grid gap-6 text-lg font-medium">
//               <Link
//                 href="#"
//                 className="flex items-center gap-2 text-lg font-semibold"
//               >
//                 <Package2 className="h-6 w-6" />
//                 <span className="sr-only">Acme Inc</span>
//               </Link>
//               <Link href="#" className="hover:text-foreground">
//                 Dashboard
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Orders
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Customers
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Analytics
//               </Link>
//             </nav>
//           </SheetContent>
//         </Sheet>
//         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
//           <form className="ml-auto flex-1 sm:flex-initial">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search products..."
//                 className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
//               />
//             </div>
//           </form>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="secondary" size="icon" className="rounded-full">
//                 <CircleUser className="h-5 w-5" />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
//         <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
//           <Card x-chunk="dashboard-01-chunk-0">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Revenue
//               </CardTitle>
//               <DollarSign className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">$45,231.89</div>
//               <p className="text-xs text-muted-foreground">
//                 +20.1% from last month
//               </p>
//             </CardContent>
//           </Card>
//           <Card x-chunk="dashboard-01-chunk-1">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Subscriptions
//               </CardTitle>
//               <Users className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+2350</div>
//               <p className="text-xs text-muted-foreground">
//                 +180.1% from last month
//               </p>
//             </CardContent>
//           </Card>
//           <Card x-chunk="dashboard-01-chunk-2">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Sales</CardTitle>
//               <CreditCard className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+12,234</div>
//               <p className="text-xs text-muted-foreground">
//                 +19% from last month
//               </p>
//             </CardContent>
//           </Card>
//           <Card x-chunk="dashboard-01-chunk-3">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Active Now</CardTitle>
//               <Activity className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">+573</div>
//               <p className="text-xs text-muted-foreground">
//                 +201 since last hour
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//         <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
//           <Card
//             className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
//           >
//             <CardHeader className="flex flex-row items-center">
//               <div className="grid gap-2">
//                 <CardTitle>Transactions</CardTitle>
//                 <CardDescription>
//                   Recent transactions from your store.
//                 </CardDescription>
//               </div>
//               <Button asChild size="sm" className="ml-auto gap-1">
//                 <Link href="#">
//                   View All
//                   <ArrowUpRight className="h-4 w-4" />
//                 </Link>
//               </Button>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Customer</TableHead>
//                     <TableHead className="hidden xl:table-column">
//                       Type
//                     </TableHead>
//                     <TableHead className="hidden xl:table-column">
//                       Status
//                     </TableHead>
//                     <TableHead className="hidden xl:table-column">
//                       Date
//                     </TableHead>
//                     <TableHead className="text-right">Amount</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Liam Johnson</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         liam@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       Sale
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-23
//                     </TableCell>
//                     <TableCell className="text-right">$250.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Olivia Smith</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         olivia@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       Refund
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Declined
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-24
//                     </TableCell>
//                     <TableCell className="text-right">$150.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Noah Williams</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         noah@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       Subscription
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-25
//                     </TableCell>
//                     <TableCell className="text-right">$350.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Emma Brown</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         emma@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       Sale
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-26
//                     </TableCell>
//                     <TableCell className="text-right">$450.00</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <div className="font-medium">Liam Johnson</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">
//                         liam@example.com
//                       </div>
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       Sale
//                     </TableCell>
//                     <TableCell className="hidden xl:table-column">
//                       <Badge className="text-xs" variant="outline">
//                         Approved
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
//                       2023-06-27
//                     </TableCell>
//                     <TableCell className="text-right">$550.00</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//           <Card x-chunk="dashboard-01-chunk-5">
//             <CardHeader>
//               <CardTitle>Recent Sales</CardTitle>
//             </CardHeader>
//             <CardContent className="grid gap-8">
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/01.png" alt="Avatar" />
//                   <AvatarFallback>OM</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">
//                     Olivia Martin
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     olivia.martin@email.com
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+$1,999.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/02.png" alt="Avatar" />
//                   <AvatarFallback>JL</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">
//                     Jackson Lee
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     jackson.lee@email.com
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+$39.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/03.png" alt="Avatar" />
//                   <AvatarFallback>IN</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">
//                     Isabella Nguyen
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     isabella.nguyen@email.com
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+$299.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/04.png" alt="Avatar" />
//                   <AvatarFallback>WK</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">
//                     William Kim
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     will@email.com
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+$99.00</div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Avatar className="hidden h-9 w-9 sm:flex">
//                   <AvatarImage src="/avatars/05.png" alt="Avatar" />
//                   <AvatarFallback>SD</AvatarFallback>
//                 </Avatar>
//                 <div className="grid gap-1">
//                   <p className="text-sm font-medium leading-none">
//                     Sofia Davis
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     sofia.davis@email.com
//                   </p>
//                 </div>
//                 <div className="ml-auto font-medium">+$39.00</div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   )
// }

// export function Dashboard() {
//   return (
//     <div className="flex min-h-screen w-full flex-col">
//       <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
//         <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
//           <Link
//             href="#"
//             className="flex items-center gap-2 text-lg font-semibold md:text-base"
//           >
//             <Package2 className="h-6 w-6" />
//             <span className="sr-only">Acme Inc</span>
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Dashboard
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Orders
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Products
//           </Link>
//           <Link
//             href="#"
//             className="text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Customers
//           </Link>
//           <Link
//             href="#"
//             className="text-foreground transition-colors hover:text-foreground"
//           >
//             Settings
//           </Link>
//         </nav>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button
//               variant="outline"
//               size="icon"
//               className="shrink-0 md:hidden"
//             >
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left">
//             <nav className="grid gap-6 text-lg font-medium">
//               <Link
//                 href="#"
//                 className="flex items-center gap-2 text-lg font-semibold"
//               >
//                 <Package2 className="h-6 w-6" />
//                 <span className="sr-only">Acme Inc</span>
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Orders
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Products
//               </Link>
//               <Link
//                 href="#"
//                 className="text-muted-foreground hover:text-foreground"
//               >
//                 Customers
//               </Link>
//               <Link href="#" className="hover:text-foreground">
//                 Settings
//               </Link>
//             </nav>
//           </SheetContent>
//         </Sheet>
//         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
//           <form className="ml-auto flex-1 sm:flex-initial">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="search"
//                 placeholder="Search products..."
//                 className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
//               />
//             </div>
//           </form>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="secondary" size="icon" className="rounded-full">
//                 <CircleUser className="h-5 w-5" />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
//         <div className="mx-auto grid w-full max-w-6xl gap-2">
//           <h1 className="text-3xl font-semibold">Settings</h1>
//         </div>
//         <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
//           <nav
//             className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
//           >
//             <Link href="#" className="font-semibold text-primary">
//               General
//             </Link>
//             <Link href="#">Security</Link>
//             <Link href="#">Integrations</Link>
//             <Link href="#">Support</Link>
//             <Link href="#">Organizations</Link>
//             <Link href="#">Advanced</Link>
//           </nav>
//           <div className="grid gap-6">
//             <Card x-chunk="dashboard-04-chunk-1">
//               <CardHeader>
//                 <CardTitle>Store Name</CardTitle>
//                 <CardDescription>
//                   Used to identify your store in the marketplace.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form>
//                   <Input placeholder="Store Name" />
//                 </form>
//               </CardContent>
//               <CardFooter className="border-t px-6 py-4">
//                 <Button>Save</Button>
//               </CardFooter>
//             </Card>
//             <Card x-chunk="dashboard-04-chunk-2">
//               <CardHeader>
//                 <CardTitle>Plugins Directory</CardTitle>
//                 <CardDescription>
//                   The directory within your project, in which your plugins are
//                   located.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form className="flex flex-col gap-4">
//                   <Input
//                     placeholder="Project Name"
//                     defaultValue="/content/plugins"
//                   />
//                   <div className="flex items-center space-x-2">
//                     <Checkbox id="include" defaultChecked />
//                     <label
//                       htmlFor="include"
//                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                     >
//                       Allow administrators to change the directory.
//                     </label>
//                   </div>
//                 </form>
//               </CardContent>
//               <CardFooter className="border-t px-6 py-4">
//                 <Button>Save</Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }


// import Link from 'next/link'
// import { GoPlus } from 'react-icons/go'
// import { FaReact } from 'react-icons/fa'
// import { BiLogoMongodb } from 'react-icons/bi'
// import { TbBrandNextjs } from 'react-icons/tb'
// import { SiPrisma, SiTailwindcss } from 'react-icons/si'
// import { IoLogoGithub, IoLogoVercel } from 'react-icons/io5'

// import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <>
      {/* <section className='space-y-6 pb-8 py-8 md:py-16 lg:py-20 '>
        <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto'>
          <h1 className='font-bold leading-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Hello world
          </h1>
          <p>This is a starter project</p>
          <div className='flex gap-x-2 *:*:gap-x-2'>
            <Link
              href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
              target='_blank'
              rel='noreferrer'
            >
              <Button variant='outline'>
                <IoLogoGithub />
                GitHub
              </Button>
            </Link>
            <Link
              target='_blank'
              href='https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdanybeltran%2Fnextjs-typescript-and-mongodb'
            >
              <Button>
                <IoLogoVercel /> Deploy
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id='features'
        className='container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl'>
            Features
          </h2>
        </div>
        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2 text-center'>
            <div className='flex h-[180px] flex-col justify-center gap-y-4 items-center rounded-md p-6'>
              <TbBrandNextjs size={40} />
              <div className='space-y-2'>
                <h3 className='font-bold leading-normal'>Next.js 14</h3>
                <p className='text-sm text-muted-foreground'>App dir</p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2 text-center'>
            <div className='flex h-[180px] flex-col justify-center gap-y-4 items-center rounded-md p-6'>
              <FaReact size={40} />
              <div className='space-y-2'>
                <h3 className='font-bold leading-normal'>React 18</h3>
                <p className='text-sm text-muted-foreground'>
                  Server and Client Components.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2 text-center'>
            <div className='flex h-[180px] flex-col justify-center gap-y-4 items-center rounded-md p-6'>
              <div className='flex items-center justify-center gap-x-3'>
                <SiPrisma size={40} />
                <GoPlus size={20} />
                <BiLogoMongodb size={40} />
              </div>
              <div className='space-y-2'>
                <h3 className='font-bold leading-normal'>Database</h3>
                <p className='text-sm text-muted-foreground'>
                  Prisma + MongoDB
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2 text-center'>
            <div className='flex h-[180px] flex-col justify-center gap-y-4 items-center rounded-md p-6'>
              <SiTailwindcss size={40} />
              <div className='space-y-2'>
                <h3 className='font-bold leading-normal'>ShadCN</h3>
                <p className='text-sm text-muted-foreground'>
                  UI components built with TailwindCSS and Radix UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='open-source'
        className='container py-8 md:py-12 lg:py-24 mx-auto'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center '>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            The code is available on{' '}
            <Link
              href='https://github.com/danybeltran/nextjs-typescript-and-mongodb'
              target='_blank'
              rel='noreferrer'
              className='underline underline-offset-4'
            >
              GitHub
            </Link>
            .{' '}
          </p>
        </div>
      </section> */}
      {/* <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Settings
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Orders
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Customers
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav
              className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
            >
              <Link href="#" className="font-semibold text-primary">
                General
              </Link>
              <Link href="#">Security</Link>
              <Link href="#">Integrations</Link>
              <Link href="#">Support</Link>
              <Link href="#">Organizations</Link>
              <Link href="#">Advanced</Link>
            </nav>
            <div className="grid gap-6">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Store Name</CardTitle>
                  <CardDescription>
                    Used to identify your store in the marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <Input placeholder="Store Name" />
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                  <CardTitle>Plugins Directory</CardTitle>
                  <CardDescription>
                    The directory within your project, in which your plugins are
                    located.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <Input
                      placeholder="Project Name"
                      defaultValue="/content/plugins"
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include" defaultChecked />
                      <label
                        htmlFor="include"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Allow administrators to change the directory.
                      </label>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div> */}

      <div className="flex min-h-screen w-full flex-col">
        {/* <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Orders
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Customers
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header> */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card
              className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
            >
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Transactions</CardTitle>
                  <CardDescription>
                    Recent transactions from your store.
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden xl:table-column">
                        Type
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Status
                      </TableHead>
                      <TableHead className="hidden xl:table-column">
                        Date
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-23
                      </TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Olivia Smith</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Refund
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-24
                      </TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Noah Williams</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Subscription
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-25
                      </TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Emma Brown</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-26
                      </TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        Sale
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        2023-06-27
                      </TableCell>
                      <TableCell className="text-right">$550.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      jackson.lee@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$39.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$299.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      William Kim
                    </p>
                    <p className="text-sm text-muted-foreground">
                      will@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$99.00</div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Sofia Davis
                    </p>
                    <p className="text-sm text-muted-foreground">
                      sofia.davis@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$39.00</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}
