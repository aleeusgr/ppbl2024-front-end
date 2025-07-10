// Example for Lesson 201.4
// Deposit funds at the Always Succeeds Validator
// https://preprod.cardanoscan.io/address/703a888d65f16790950a72daee1f63aa05add6d268434107cfa5b67712

// In this example, we hard-code the values
// Extension #1: Build a form so that user can decide how many tokens to lock, or to change the datum message

// Upcoming Project - Build Your Own Faucet App
// you'll need to create that instance.
// Actually, to do this, you'll need tokens, which is the topic of the next module!
// Then, you'll be able to compile your own validator, as introduced in Module 101
import { useWallet } from "@meshsdk/react";
import { Transaction } from "@meshsdk/core";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AlwaysSucceedsLockingTx() {
  // Learn about useWallet: https://meshjs.dev/react/wallet-hooks#useWallet
  const { wallet } = useWallet();

  async function onClick() {
    try {
      const tx = new Transaction({ initiator: wallet }).sendLovelace(
        {
          address:
            "addr_test1wqag3rt979nep9g2wtdwu8mr4gz6m4kjdpp5zp705km8wys6t2kla",
          datum: {
            value: "hello from PPBL 2025!",
            inline: true,
          },
        },
        "4321765",
      );
      const unsignedTx = await tx.build(); // compare to cardano-cli transaction build
      const signedTx = await wallet.signTx(unsignedTx); // compare to cardano-cli transaction sign
      const txHash = await wallet.submitTx(signedTx); // compare to cardano-cli transaction submit
      alert(`Successful Transaction: ${txHash}`);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="pb-5 text-2xl">
        Lock tAda at the Always Succeeds address on Preprod
      </p>
      <Button onClick={onClick}>Lock 4.321765 tAda</Button>
      <p className="pt-5 text-amber-500 hover:text-amber-300">
        <Link href="https://preprod.cardanoscan.io/address/703a888d65f16790950a72daee1f63aa05add6d268434107cfa5b67712">
          Then, be sure to look for your UTxO, and investigate the Datum
        </Link>
      </p>
    </div>
  );
}
