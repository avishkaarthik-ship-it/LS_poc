package query

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type PsqlClientInstance = pgxpool.Pool

type psqlDbHelperIns struct {
	PgClient *PsqlClientInstance
}

func InitPsqlHelper(appContext context.Context) *psqlDbHelperIns {
	psqlClientIns, err := pgxpool.New(appContext, "postgresql://hl_admin:hl_password@127.0.0.1:5432/human_labs")
	if err != nil {
		panic(err)
	}

	return &psqlDbHelperIns{
		PgClient: psqlClientIns,
	}
}
