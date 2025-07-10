import Head from "next/head";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>PPBL 2025</title>
        <meta
          name="description"
          content="Plutus Project-Based Learning 2025, from Gimbalabs & Friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">


            <div className="flex min-h-[70vh] flex-col items-center justify-center px-5">
              <p className="text-center text-sm text-indigo-300 md:text-2xl">
                welcome to
              </p>
              <h1 className="my-[3rem] text-2xl font-extrabold tracking-tight md:text-[3rem]">
                Plutus Project-Based Learning 2025
              </h1>
              <div className="mx-auto mt-[5rem] flex w-full flex-row justify-between md:w-3/4">
                <Link href="https://github.com/gimbalabs/ppbl2024-front-end">
                  <GitHubLogoIcon width={50} height={50} />
                </Link>
                <Link href="https://gimbalabs.com">
                  <Image
                    className="rounded-full"
                    src="/g.png"
                    width={50}
                    height={50}
                    alt="g"
                  />
                </Link>
                <Link href="https://discord.gg/NZrBvwPq">
                  <DiscordLogoIcon width={50} height={50} />
                </Link>
              </div>
            </div>

        <div className="w-2/3">
          <p className="text-left font-mono text-[1.5rem]">
            ppbl2025 $ <span className="animate-pulse">_</span>
          </p>
        </div>
      </main>
    </>
  );
}
