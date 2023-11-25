import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockListKey = ["block-list"] as any;

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
    placeholderData: keepPreviousData,
  });
}

export function useAddBlockItemMutation() {
  const queyrClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queyrClient.invalidateQueries(blockListKey);
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queyrClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queyrClient.invalidateQueries(blockListKey);
    },
  });
}
