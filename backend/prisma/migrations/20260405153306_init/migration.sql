-- CreateTable
CREATE TABLE "user" (
    "id_user" UUID NOT NULL,
    "pseudo" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "avatar" VARCHAR(100),
    "role" VARCHAR(10) NOT NULL DEFAULT 'MEMBER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "token" (
    "id_token" UUID NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "id_user" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id_token")
);

-- CreateTable
CREATE TABLE "event" (
    "id_event" UUID NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL,
    "city" VARCHAR(50),
    "status" VARCHAR(20) NOT NULL DEFAULT 'PUBLISHED',
    "id_user" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "participation" (
    "status" VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    "id_user" UUID NOT NULL,
    "id_event" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "participation_pkey" PRIMARY KEY ("id_user","id_event")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_pseudo_key" ON "user"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "token_value_key" ON "token"("value");

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation" ADD CONSTRAINT "participation_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participation" ADD CONSTRAINT "participation_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "event"("id_event") ON DELETE RESTRICT ON UPDATE CASCADE;
