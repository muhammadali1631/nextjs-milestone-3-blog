import Link from "next/link";

function Footer() {
    return (
<footer >
    <div className="mx-auto w-full max-w-screen-xl mt-8">
      <div className=" gap-8 px-4 py-6 lg:py-8 flex justify-around flex-wrap border-t-2">
        <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase ">Pages</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <Link href={"/"} className=" hover:underline">Home</Link>
                </li>
                <li className="mb-4">
                    <Link href={'/about'} className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                    <Link href={"/contact"} className="hover:underline">Contact</Link>
                </li>
                <li className="mb-4">
                    <Link href={"/blog"} className="hover:underline">Blog</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold uppercase ">Categories</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <Link href={'/blog'} className="hover:underline">All</Link>
                </li>
                <li className="mb-4">
                    <Link href={'/blog/category/education'} className="hover:underline">Education</Link>
                </li>
                <li className="mb-4">
                    <Link href={'/blog/category/how-tos'} className="hover:underline">How To&apos;s</Link>
                </li>
                <li className="mb-4">
                    <Link href={"/blog/category/technology"} className="hover:underline">Technology</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase">Contact</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">LinkedIn</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Github</Link>
                </li>
            </ul>
        </div>
        <div className="w-72">
            <h2 className="mb-6 text-sm font-semibold  uppercase">Download</h2>
            <ul className=" font-medium">
                <p className="">Subscribe to our news letter and we&apos;ll send you the email of latest posts.</p>
                <input type="text" className="outline-none border-[1px] dark:border-white border-black w-full rounded-md p-2 my-2" placeholder="Enter Your Email"/>
                <button className="px-6 py-2 bg-green-600 rounded-lg">Send</button>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 flex justify-center border-t-2">
        <span className="text-sm  sm:text-center">© 2024 <Link href="/">Bloggo™</Link>. All Rights Reserved.
        </span>
      </div>
    </div>
</footer>
    )
}
export default Footer;