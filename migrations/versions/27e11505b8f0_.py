"""empty message

Revision ID: 27e11505b8f0
Revises: 1469be25d761
Create Date: 2023-05-24 23:14:06.242685

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '27e11505b8f0'
down_revision = '1469be25d761'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('piso',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=528), nullable=False),
    sa.Column('adress', sa.String(length=120), nullable=False),
    sa.Column('area', sa.Integer(), nullable=False),
    sa.Column('rooms_number', sa.Integer(), nullable=False),
    sa.Column('bathrooms_number', sa.Integer(), nullable=False),
    sa.Column('parking_slots', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('piso')
    # ### end Alembic commands ###
