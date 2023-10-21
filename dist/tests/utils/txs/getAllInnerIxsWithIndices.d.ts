import { ParsedInstruction, ParsedTransactionWithMeta, PartiallyDecodedInstruction } from "@solana/web3.js";
export default function getAllInnerIxsWithIndices(parsedTx: ParsedTransactionWithMeta): {
    ix: ParsedInstruction | PartiallyDecodedInstruction;
    ixIndex: number;
    ixInnerIndex: number;
}[] | undefined;
//# sourceMappingURL=getAllInnerIxsWithIndices.d.ts.map