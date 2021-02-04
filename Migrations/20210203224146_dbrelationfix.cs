using Microsoft.EntityFrameworkCore.Migrations;

namespace ForumTwo.Migrations
{
    public partial class dbrelationfix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ThreadId",
                table: "Likes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Likes_ThreadId",
                table: "Likes",
                column: "ThreadId");

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Threads_ThreadId",
                table: "Likes",
                column: "ThreadId",
                principalTable: "Threads",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Threads_ThreadId",
                table: "Likes");

            migrationBuilder.DropIndex(
                name: "IX_Likes_ThreadId",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "ThreadId",
                table: "Likes");
        }
    }
}
