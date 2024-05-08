import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetcher } from "../lib/axios";

export default function useStudent() {
      const { isLoading, data, isError, error } = useQuery('students', () => {
            return fetcher.get('/students');
      });
      return { data, isLoading, isError, error };
};
