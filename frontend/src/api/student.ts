import { useMutation, useQuery } from "react-query";
import { fetcher } from "../lib/axios";
import { studentInfo } from "../typing/type";

export const getStudent = async (all: boolean) => {
      const { data } = await fetcher.get('/students');
      return data;
};
export const useGetStudent = (all: boolean) => {
      return useQuery({
            queryKey: ['students', all],
            queryFn: () => getStudent(all)
      })
};
export const getOneStudent = async (id?: string) => {
      if (!id) return;
      const { data } = await fetcher.get(`/students/${id}`);
      return data;
};
export const useGetOneStudent = (id?: string) => {
      return useQuery({
            queryKey: ['student', id],
            queryFn: () => getOneStudent(id),
      })
};

export const createStudent = async (data: any) => {
      return await fetcher.post('/students', data);
};
export const useCreateStudent = () => {
      return useMutation({
            mutationFn: createStudent
      })
};

export const updateStudent = async ({ id, data }: { id?: string; data: Partial<studentInfo> }) => {
      if (!id) return;
      return await fetcher.patch(`/students/${id}`, data);
};
export const useUpdateStudendent = () => {
      return useMutation({
            mutationFn: updateStudent
      })
};

export const deleteStudent = async ({ id }: { id?: string }) => {
      if (!id) return;
      return await fetcher.delete(`/students/${id}`);
};
export const useDeleteStudent = () => {
      return useMutation({
            mutationFn: deleteStudent
      })
};