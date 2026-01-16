package query

import (
	"fmt"

	"github.com/jackc/pgx/v5"
)

func RowToStructModelByName[T any](row pgx.CollectableRow) (T, error) {
	model, err := pgx.RowToStructByNameLax[T](row)
	return model, err
}

func MapOfQueryResponse(row pgx.Rows) *[]map[string]any {

	fields := row.FieldDescriptions()
	results := make([]map[string]any, 0)

	for row.Next() {

		rowRes := make(map[string]any)
		vals, err := row.Values()
		if err != nil {
			fmt.Println("Error scanning row:", err)
			return nil
		}

		for i := range fields {
			rowRes[string(fields[i].Name)] = vals[i]
		}
		results = append(results, rowRes)
	}

	return &results
}
